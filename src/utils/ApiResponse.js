class ApiResponse {
    constructor(
        statusCode,
        message = "Success",
        data
    ) {
        this.statusCode = statusCode
        this.message = message
        this.success = statusCode
        this.data = data
    }
}

export { ApiResponse }