package org.roadside.food.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
public class Hotel {
    @Builder.Default
    private UUID id = UUID.randomUUID();
    String name;
    Locality branch;
    User owner;
    Cusine cusine;
}
