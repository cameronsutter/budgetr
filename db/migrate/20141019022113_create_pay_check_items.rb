class CreatePayCheckItems < ActiveRecord::Migration
  def change
    create_table :pay_check_items do |t|
      t.string :title
      t.integer :amount
      t.integer :unused_amount
      t.references :paycheck, index: true

      t.timestamps
    end
  end
end
