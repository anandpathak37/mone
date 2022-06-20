ActiveAdmin.register About do

  permit_params :title, :body,image_attributes: [:id, :avatar, :_destroy]

  form do |f|
    f.inputs do  
      f.input :title                    #   #  ###image_tag (image.object.avatar.url)
      f.input :body, as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
    end 
    f.inputs "Image", for: [:image, f.object.image || Image.new], :multipart => true, allow_destroy: true do |image|
      image.input :image, :as => :file, :hint => image.object&.id ? image_tag(image.object.imageable) : content_tag(:span, "please upload image")
    end
    
  
    f.actions
  end
  #permit_params :list, :of, :attributes, :on, :model
  # index do
  #   column :user_id
  #   column :title
  #   column :body


  #   column :published_at
  #   column :image 
  #   actions
  # end
  # form :html => { :enctype => "multipart/form-data" } do |f|
  #   f.inputs "Details" do
  #     f.input :image, :as => :file, input_html: { multiple: true } #:hint => f.template.image_tag(f.object.image.url())
  #     f.input :title
  #     f.input :body
  #   end
  #   f.actions
  # end

  
  #  show do
  #   include_all_fields

  #   field :body do
  #     pretty_value do
  #       value.html_safe
  #     end
  #   end
  # end
  # show do
  #   attributes_table do
  #     row :images do
  #       div do
  #         post.images.each do |img|
  #           div do
  #             image_tag url_for(img), size: "200x200"
  #           end
  #         end
  #       end
  #     end

  #     row :title
  #     row :body
  #   end
  # end
end
 
  
