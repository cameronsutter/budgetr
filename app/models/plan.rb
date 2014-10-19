class Plan < ActiveRecord::Base
  belongs_to :user
  has_many :paychecks
  has_many :plan_items
end
