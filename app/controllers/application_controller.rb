class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def index
    render html: false, layout: 'application'
  end
end
