package org.roadside.food.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
public class User {
    @Builder.Default
    private UUID id = UUID.randomUUID();
    String email;
    String phoneNumber;
    String firstName;
    String lastName;
    LocalDate dob;
}
