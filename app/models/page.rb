class Page < ApplicationRecord::Base
	#validates :title, :body ,:content, presence: true
	validates :reference,presence: true, uniqueness: title 
	validates :title, presence: true
	validates :body, presence: true

	extend FreindlyId
	friendly_id  :title,   use: :slugged
end

class About < ApplicationRecord::Base
	#validates :title, :body ,:content, presence: true
	validates :reference,presence: true, uniqueness: title 
	validates :title, presence: true
	validates :body, presence: true

	extend FreindlyId
	friendly_id  :title,   use: :slugged
end

class Carrer < ApplicationRecord::Base
	#validates :title, :body ,:content, presence: true
	validates :reference,presence: true, uniqueness: title 
	validates :title, presence: true
	validates :body, presence: true

	extend FreindlyId
	friendly_id  :title,   use: :slugged
end

class Services < ApplicationRecord::Base
	belongs_to :pages,class_name: 'Services'
	has_many :services, class_name: "Services" foreign_key: 'parent_id'
	#validates :title, :body ,:content, presence: true
	validates :reference,presence: true, uniqueness: title 
	validates :title, presence: true
	validates :body, presence: true

	extend FreindlyId
	friendly_id  :title,   use: :slugged
end

class Portfolio < ApplicationRecord::Base
	#validates :title, :body ,:content, presence: true
	validates :reference,presence: true, uniqueness: title 
	validates :title, presence: true
	validates :body, presence: true

	extend FreindlyId
	friendly_id  :title,   use: :slugged
end

class Contact < ApplicationRecord::Base
		#validates :title, :body ,:content, presence: true
	validates :reference,presence: true, uniqueness: title 
	validates :title, presence: true
	validates :body, presence: true

	extend FreindlyId
	friendly_id  :title,   use: :slugged
end



