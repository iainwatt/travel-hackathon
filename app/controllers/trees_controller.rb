class TreesController < ApplicationController


  def index
    @tree = Trees.all
  end

  def new
    @tree = Tree.new
  end

  def create
    
    @tree = Tree.create(tree_params)

    respond_to do |format|
      format.html
      format.json {render json: @tree}
    end

  end

  def show
    @tree = Tree.find(params[:id])
  end 

private

  def tree_params
      params.require(:tree).permit(:name, :species, :description, :address, :height, :girth, :age, :remote_tree_image_url)
  end


end