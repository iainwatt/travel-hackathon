class TreesController < ApplicationController


  def index

  end

  def show
    @tree = Tree.find(params[:id])
  end
  
end