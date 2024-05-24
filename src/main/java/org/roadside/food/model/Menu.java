package org.roadside.food.model;

import lombok.*;

import java.util.List;
import java.util.Optional;

@Data
@Builder
@AllArgsConstructor
public class Menu {
    @NonNull
    Hotel hotel;
    Optional<String> logo;
    @NonNull
    List<Item> items;
    String note;
}
