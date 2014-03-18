module SessionsHelper #included in views by default but not controllers - would need to explicitly tell the controllers
 def admin?
 	if current_user.nil?
 		false
 	else
 		current_user.is_role_by_name?("admin")
 	end
 end
end