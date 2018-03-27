class Schema < GraphQL::Schema
  query Types::Query

  use GraphQL::Guard.new(
    policy_object: GraphqlPolicy,
    not_authorized: ->(type, field) { GraphQL::ExecutionError.new("Not authorized to access #{type}.#{field}") }
  )
  use ApolloTracing.new
  use BatchLoader::GraphQL
end

GraphQL::Errors.configure(Schema) do
  rescue_from StandardError do |exception, object|
    Rails.logger.error([
      exception.inspect,
      exception.backtrace,
      "GraphQL object: #{object.inspect}"
    ].join("\n"))

    GraphQL::ExecutionError.new("Please try to execute the query for this field later")
  end
end
