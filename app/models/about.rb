class About < ApplicationRecord
  # belongs_to :user
  has_one :image, as: :imageable,  :dependent => :destroy
  accepts_nested_attributes_for :image, :allow_destroy => true

  #has_many_attached :image 

end
