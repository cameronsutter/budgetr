class Plan < ActiveRecord::Base
  belongs_to :user
  has_many :paychecks
end
