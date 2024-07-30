package com.backendmentor.app.exceptions;

import java.sql.Timestamp;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({ BadRequestException.class })
    public ResponseEntity<RestEntity> handleBadRequestException(BadRequestException exception) {

        final int httpCodeRequest = HttpStatus.BAD_REQUEST.value();
        System.out.println(httpCodeRequest);
        RestEntity restEntity = new RestEntity(
                httpCodeRequest,
                HttpStatus.BAD_REQUEST,
                null,
                exception.getMessage(),
                new Timestamp(System.currentTimeMillis()));

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(restEntity);
    }

    @ExceptionHandler({ RuntimeException.class })
    public ResponseEntity<RestEntity> handleRuntimeException(RuntimeException exception) {
        RestEntity restEntity = new RestEntity(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                HttpStatus.INTERNAL_SERVER_ERROR,
                null,
                exception.getMessage() + " Cause: " + (exception.getCause() != null ? exception.getCause() : "None"),
                new Timestamp(System.currentTimeMillis()));
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(restEntity);
    }

    @ExceptionHandler({ Exception.class })
    public ResponseEntity<RestEntity> handleException(Exception exception) {
        RestEntity restEntity = new RestEntity(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                HttpStatus.INTERNAL_SERVER_ERROR,
                null,
                "Error desconocido: " + exception.toString(),
                new Timestamp(System.currentTimeMillis()));
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(restEntity);
    }
}
