class Schema < GraphQL::Schema
  query Types::Query
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
