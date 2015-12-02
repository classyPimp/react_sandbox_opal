require "vendor/model"

class User < Model

  attributes :id, :email, :password, :password_confirmation

  route "sign_up", post: "users"

  route "Find", get: "users/:id"

  route "Show", get: "users/:id"

  route "test", post: "test"

  route "create", post: "users"
 
  has_one :profile, :avatar
  accepts_nested_attributes_for :profile, :avatar

  def on_before_test(r)
    r.req_options = {payload: pure_attributes}
  end

  def validate_email(options={})
    unless email.match /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
      add_error :email, "you should provide a valid email"
    end
  end

  def validate_password
    if password.length < 6
      add_error :password, "password is too short"
    end
    if password != password_confirmation
      add_error :password_confirmation, "confirmation does not match"
    end
  end
end