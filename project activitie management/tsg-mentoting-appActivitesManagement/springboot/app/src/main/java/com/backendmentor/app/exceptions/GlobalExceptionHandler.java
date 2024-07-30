package com.backendmentor.app.exceptions;

import java.sql.Timestamp;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({ BusinessLogicException.class })
    public ResponseEntity<LogicExceptionEntity> handleBadRequestException(BusinessLogicException exception) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body( new LogicExceptionEntity(
                        HttpStatus.BAD_REQUEST.value(),
                        exception.getMessage(),
                        new Timestamp(System.currentTimeMillis())));
    }

    @ExceptionHandler({ RuntimeException.class })
    public ResponseEntity<LogicExceptionEntity> handleRuntimeException(RuntimeException exception) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new LogicExceptionEntity(
                        HttpStatus.INTERNAL_SERVER_ERROR.value(),
                        "Error interno, servidor base de datos no responde, su ruta cambio o se encuentra desactivada.",
                        new Timestamp(System.currentTimeMillis())));
    }

}
