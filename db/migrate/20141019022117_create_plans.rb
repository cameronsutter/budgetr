class CreatePlans < ActiveRecord::Migration
  def change
    create_table :plans do |t|
      t.integer :amount
      t.string :date_scheme
      t.references :user, index: true

      t.timestamps
    end
  end
end
