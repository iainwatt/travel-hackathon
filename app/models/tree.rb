class Tree < ActiveRecord::Base
  mount_uploader :tree_image, TreeImageUploader
end
