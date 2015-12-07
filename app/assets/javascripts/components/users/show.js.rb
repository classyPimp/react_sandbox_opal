module Users

	class Show < RW
		
    def get_initial_state
      {
        user: false
      }
    end

    def component_did_mount
      User.show({id: props.params.id}).then do |user|
        set_state user: user
      end.fail do |response|
        `console.log("error:")`
        `console.log(#{response})`
      end
    end

		def render
			t(:div, {},
        if state.user
          t(:div, {}, 
            t(:p, {}, (state.message if state.message)),
    				t(:div, {},
              t(:div, {},
                t(:image, {src: "#{state.user.try(:avatar).try(:url)}", style: {width: "100px", height: "100px"}}, )
              ),
              t(:p, {}, "name: #{state.user.try(:profile).try(:name)}"),
              t(:p, {}, "email: #{state.user.email}"),
              t(:p, {}, "bio: #{state.user.try(:profile).try(:bio)}")
            ),
            if state.user.attributes[:arbitrary] == "current_user"
              t(:p, {onClick: ->(){logout_user}}, "click here to logout")
            end
          )
        end
			)
		end

    def logout_user
      AppController.logout_user
    end

	end

end