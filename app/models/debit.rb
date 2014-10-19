class Debit < ActiveRecord::Base
  belongs_to :pay_check_item
end
