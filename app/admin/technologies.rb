ActiveAdmin.register Technology do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :Ruby, :Ruby_on_rails, :python, :Django, :Go, :Angular, :React, :VueJs, :Blockchain, :Machinelearning, :datascience, :Nodejs, :devopps
  #
  # or
  #
  form do |f|
    f.inputs do                      
      f.input :Ruby,label: 'Ruby', as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :Ruby_on_rails,label: "Ruby_on_rails", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :python, label: "python",as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :Django,label: "Django", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :Go,label: "Go", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :Angular,label: "Angular", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :React,label: "React", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :VueJs,label: "VueJs" ,as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :Blockchain,label:"Blockchain", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :Machinelearning,label:"Machinelearning", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :datascience,label:"datascience", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :Nodejs,label:"Nodejs", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :devopps,label:"devopps", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }


    end
  f.actions
  end
  
end
