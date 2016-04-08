class UsersController < ApplicationController

  
  ######################AUTHENTICATION
  before_action :logged_in_user, only: [:edit, :update]
  before_action :correct_user,   only: [:edit, :update]

  def new
    @user = User.new  
  end

  def create
    #@user = User.new(create_user_params) #<= standart auth uncoment
    perms_for :User #added !standart_auth
    auth! @perms #added !standart_auth
    #render json: @perms.permitted_attributes and return
    @user = User.new(@perms.permitted_attributes)
    @user.add_role(:patient)
    
    if (!@user.profile.phone_number.blank? && !(/\A[+-]?\d+\z/.match(@user.profile.phone_number)))
      @user.profile.add_custom_error('phone_number', 'valid phone_number should be provided')
    end 

    if @user.save
      if User::ACTIVATABLE
        @user.send_activation_email
        render json: @user.as_json(only: [:id, :email])
      else
        log_in @user 
        #remember user
        render json: @user.as_json(only: [:id, :email])
      end
    else
      render json: @user.as_json(only: [:email], methods: [:errors], include: [{profile: {only: [:phone_number], root: true, methods: [:errors]}}])
    end
  end

  def create_user_params
    params.require(:user).permit(:email, :password, :password_confirmation) #DEFAULT AUTHENTICATION. FOR PURE UNCOMMENT AND DELETE REST OF METHOD
  end

  # Confirms a logged-in user.
  def logged_in_user
    unless logged_in?
      store_location
      flash[:danger] = "Please log in."
      redirect_to login_url
    end
  end

  # Confirms the correct user.
  def correct_user
    @user = User.find(params[:id])
    redirect_to(root_url) unless current_user?(@user)
  end
  ######################END AUTHENTICATION

  def index
    
    @perms = perms_for :User

    auth! @perms

    render json: @perms.model
    
  end

  def expose_current_user
    roles_to_fetch = params[:roles] || []
    unless current_user == nil
      if roles_to_fetch.empty?
        render json: current_user.as_json(only: [:id, :email, :registered], include: {roles: {root: true, only: [:name]}})
      elsif roles_to_fetch && current_user.has_any_role?(*roles_to_fetch)
        render json: current_user.as_json(only: [:id, :email, :registered], include: {roles: {root: true, only: [:name]}})
      else
        head 403 and return
      end
    else
      render json: {user: {roles: [{role: {name: "guest"}}] }}
    end
  end

  def show

    @perms = perms_for :User

    auth! @perms

    if current_user.id.to_s == params[:id]
      @perms.model["user"]["arbitrary"] = "current_user"
    end

    render json: @perms.model

  end

  def edit
    
    @perms = perms_for :User 

    auth! @perms

    render json: @perms.model

  end

  def destroy
    @perms = perms_for :User
    auth! @perms
    @user = User.find(params[:id])
    if @user.destroy
      render json: @user.as_json(only: [:id])
    end
  end

  def update
    
    @perms = perms_for :User

    auth! @perms

    @user = User.find(params[:id])

    @user.update_attributes(@perms.permitted_attributes)
    if @user.save
      render json: @user.as_json(only: [:email, :id], 
                                include: {profile: {root: true, only: [:id, :name, :bio, :user_id]},
                                          avatar: {root: true, only: [:id], methods: [:url]}})
    else  
       render json: @user.as_json(only: [:email, :id], methods: [:errors], 
                                include: {profile: {root: true, only: [:id, :user_id, :name, :bio]},
                                          avatar: {root: true, only: [:id], methods: [:url]}})
    end
  end

  def roles_feed
    auth! Services::RoleManager.new
    map = []
    Services::RoleManager.allowed_global_roles.each do |role|
      map << {role: {name: role}}
    end
    render json: map
  end

  def destroy_unregistered_user_with_proposals
    @user = User.find(params[:id])

    perms_for @user
    auth! @perms.destroy_unregistered_user_with_proposals

    cmpsr = ComposerFor::User::Unregistered::DestroyWithProposals.new(@user)

    cmpsr.when(:ok) do |user|
      render json: user.as_json(only: [:id])
    end

    cmpsr.when(:fail) do
      head 500
    end

    cmpsr.run

  end

end
