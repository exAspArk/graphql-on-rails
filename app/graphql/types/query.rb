class Types::Query < GraphQL::Schema::Object
  field :posts, [Types::Post], null: false
  field :post, Types::Post, null: false do
    argument :id, ID, required: true
  end

  def posts
    ::Post.all
  end

  def post(attributes)
    ::Post.find(attributes[:id])
  end
end
