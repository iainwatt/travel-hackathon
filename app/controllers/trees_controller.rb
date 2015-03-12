class TreesController < ApplicationController


  def index
    @trees = Tree.all
    @tree = Tree.new
    respond_to do |format|
      format.html
      format.json { render json: @trees }
    end

<<<<<<< HEAD
=======
    # @tree = Trees.all
>>>>>>> bd3ac6b77841fdad2f6c676bc8b40927afdac0e1
  end

  def new
    @tree = Tree.new
  end

  def create
    binding.pry
    @tree = Tree.create(tree_params)
    # respond_to do |format|
    #   format.html
    #   format.json {render json: @tree}
    # end
    redirect_to trees_path
  end

  def show
    @tree = Tree.find(params[:id])
  end 

private

  def tree_params
      params.require(:tree).permit(:name, :species, :description, :address, :height, :girth, :age, :remote_tree_image_url)
  end
end