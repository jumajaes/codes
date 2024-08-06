package com.backendmentor.app.exceptions;

import java.sql.Timestamp;
import java.util.HashMap;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import java.util.Map;
import java.util.NoSuchElementException;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler({ BusinessLogicException.class })
  public ResponseEntity<LogicExceptionEntity> handleBadRequestException(BusinessLogicException exception) {
    return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body(new LogicExceptionEntity(
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
            "Error interno no se pudo completar la tarea.",
            new Timestamp(System.currentTimeMillis())));
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public Map<String, String> handleInvalidArguments(MethodArgumentNotValidException exception) {
    Map<String, String> errors = new HashMap<>();

    exception.getBindingResult().getFieldErrors().forEach(error -> {
      errors.put(error.getField(), error.getDefaultMessage());
    });
    return errors;
  }

  @ExceptionHandler(HttpMessageNotReadableException.class)
  public ResponseEntity<LogicExceptionEntity> handleNoBody(HttpMessageNotReadableException exception) {
    return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body(new LogicExceptionEntity(
            HttpStatus.BAD_REQUEST.value(),
            "Error, cuerpo de la solicitud nulo no valido.",
            new Timestamp(System.currentTimeMillis())));
  }

  @ExceptionHandler(DataIntegrityViolationException.class)
  public ResponseEntity<LogicExceptionEntity> handleNameDuplicate(DataIntegrityViolationException exception) {
    return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body(new LogicExceptionEntity(
            HttpStatus.BAD_REQUEST.value(),
            "Error, nombre ya existe.",
            new Timestamp(System.currentTimeMillis())));
  }

  
  @ExceptionHandler(NoSuchElementException.class)
  public ResponseEntity<LogicExceptionEntity> handleNoFoundUser(NoSuchElementException exception) {
    return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body(new LogicExceptionEntity(
            HttpStatus.BAD_REQUEST.value(),
            "Usuario a asignar no existe.",
            new Timestamp(System.currentTimeMillis())));
  }
}
