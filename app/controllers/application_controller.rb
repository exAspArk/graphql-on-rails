class ApplicationController < ActionController::Base
  def index
    render html: false, layout: 'application'
  end
end
