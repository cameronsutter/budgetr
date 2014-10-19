class CreatePlanItems < ActiveRecord::Migration
  def change
    create_table :plan_items do |t|
      t.string :title
      t.integer :amount
      t.references :plan, index: true

      t.timestamps
    end
  end
end
