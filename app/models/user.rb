class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  has_and_belongs_to_many :roles

  def add_role(role)
  	roles << role # << adds element to the array 
  end

  def add_role_by_name(role_name)
  	role = Role.find_by(name: role_name)
  	add_role(role)
  end

  def remove_role(role)
  	roles.delete(role)
  end

  def remove_role_by_name(role_name)
  	role = Role.find_by(name: role_name)
  	remove_role(role)
  end

  def is_role?(role) # ? is the convention for a boolean method
  	roles.include?(role) #returns whatever the last line evaluates to - dont need the keyword return, 
  							#if it doesnt behave as an array, do roles.to_a.include?(role)
  							#and you will get true/false instead of 1
  end

  def is_role_by_name?(role_name)
  	role = Role.find_by(name: role_name)
  	is_role?(role)
  end

end
