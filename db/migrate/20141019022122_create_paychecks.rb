class CreatePaychecks < ActiveRecord::Migration
  def change
    create_table :paychecks do |t|
      t.timestamp :start_date
      t.timestamp :end_date
      t.integer :amount
      t.integer :transfer_amount
      t.integer :carry_over_amount
      t.integer :previous_balance
      t.integer :user_id
      t.references :plan, index: true

      t.timestamps
    end
  end
end
