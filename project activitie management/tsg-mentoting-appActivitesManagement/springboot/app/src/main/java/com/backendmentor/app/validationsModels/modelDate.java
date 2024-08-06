package com.backendmentor.app.validationsModels;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import com.backendmentor.app.exceptions.BusinessLogicException;
import com.fasterxml.jackson.annotation.JsonFormat;

public class modelDate {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private Timestamp expiration_date;

    public Timestamp getExpirationDate(String dateStr) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        try {
            LocalDateTime dateTime = LocalDateTime.parse(dateStr, formatter);
            return Timestamp.valueOf(dateTime);
        } catch (DateTimeParseException e) {
            throw new BusinessLogicException("El error al intentar formatear, fecha de expiracion no válida. Debe seguir el formato yyyy-MM-dd'T'HH:mm:ss");
        }
    }

}
