// const asyncHandler = () => { }
// const asyncHandler = (func) => { }
// **if func on execution return a function and we have to execute it
// const asyncHandler = (func) => () => { } 
//!! if func on execution return an async function and we have to execute it
// const asyncHandler = (func) => async() => { }

//using async.await
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json(
            {
                success: false,
                message: error.message
            }
        )
    }
}

//using Promise
// const asyncHandler = (requestHandler) => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next))
//             .catch((err) => next(err))
//     }
// }

export { asyncHandler }

