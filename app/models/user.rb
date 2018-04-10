class User < ApplicationRecord
  def role
    :user
  end

  def email
    "#{name}@example.com"
  end
end
