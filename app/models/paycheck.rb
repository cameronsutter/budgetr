class Paycheck < ActiveRecord::Base
  belongs_to :plan
  has_many :pay_check_items
end
