class CreateDebits < ActiveRecord::Migration
  def change
    create_table :debits do |t|
      t.timestamp :spent_on
      t.integer :amount
      t.references :pay_check_item, index: true

      t.timestamps
    end
  end
end
