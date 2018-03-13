class Types::Post < GraphQL::Schema::Object
  field :id, ID, null: false
  field :title, String, null: false
  field :description, String, null: false
  field :content, String, null: false
  field :created_at, String, null: false
end
