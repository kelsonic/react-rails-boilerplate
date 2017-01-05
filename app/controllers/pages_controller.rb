class PagesController < ApplicationController
  def home
    @hello_world_props = { name: "Stranger" }
  end
end
