package org.roadside.food.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
public class Item {
    @Builder.Default
    private UUID id = UUID.randomUUID();
    String name;
    String description;
    double price;
    Optional<String> imageUrlOpt;
    Set<Ingredient> ingredients;
    String category;
}
