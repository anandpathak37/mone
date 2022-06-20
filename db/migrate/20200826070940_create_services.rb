class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :web
      t.string :mobile
      t.string :IoT
      t.string :BigD
      t.string :EnterAp
      t.string :AI
      t.string :QA
      t.string :dev
      t.string :design
      

      t.timestamps
    end
  end
end
