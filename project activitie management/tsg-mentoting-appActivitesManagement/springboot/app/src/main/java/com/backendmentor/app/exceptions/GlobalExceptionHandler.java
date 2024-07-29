package com.backendmentor.app.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler({BadRequestException.class})
    public ResponseEntity<Object> handleStudentNotFoundException(BadRequestException exception) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(exception.getMessage());
    }
    // @ExceptionHandler({StudentAlreadyExistsException.class})
    // public ResponseEntity<Object> handleStudentAlreadyExistsException(StudentAlreadyExistsException exception) {
    //     return ResponseEntity
    //             .status(HttpStatus.INTERNAL_SERVER_ERROR)
    //             .body(exception.getMessage());
    // }
    @ExceptionHandler({RuntimeException.class})
    public ResponseEntity<Object> handleRuntimeException(RuntimeException exception) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(exception.getMessage());
    }
}
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.ControllerAdvice;
// import org.springframework.web.bind.annotation.ExceptionHandler;
// import org.springframework.web.context.request.WebRequest;
// import org.springframework.web.server.ResponseStatusException;

// import java.time.LocalDateTime;

// @ControllerAdvice
// public class GlobalExceptionHandler {

//     @ExceptionHandler(ResponseStatusException.class)
//     public ResponseEntity<ErrorResponse> handleResponseStatusException(ResponseStatusException ex, WebRequest request) {
//         ErrorResponse errorResponse = new ErrorResponse(
//                 "error",
//                 LocalDateTime.now().toString(),
//                 ex.getStatusCode().toString(),
//                 ex.getReason(),
//                 request.getDescription(false)
//         );
//         return new ResponseEntity<>(errorResponse, ex.getStatusCode());
//     }

//     @ExceptionHandler(Exception.class)
//     public ResponseEntity<ErrorResponse> handleGlobalException(Exception ex, WebRequest request) {
//         ErrorResponse errorResponse = new ErrorResponse(
//                 "error",
//                 LocalDateTime.now().toString(),
//                 HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(),
//                 ex.getMessage(),
//                 request.getDescription(false)
//         );
//         return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
//     }

//     // Clase para la respuesta de error
//     public static class ErrorResponse {
//         private String status;
//         private String timestamp;
//         private String error;
//         private String message;
//         private String path;

//         public ErrorResponse(String status, String timestamp, String error, String message, String path) {
//             this.status = status;
//             this.timestamp = timestamp;
//             this.error = error;
//             this.message = message;
//             this.path = path;
//         }

//         // Getters y setters
//     }
// }
