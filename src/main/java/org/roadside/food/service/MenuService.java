    package org.roadside.food.service;

    import org.roadside.food.model.*;
    import org.springframework.stereotype.Service;

    import java.time.LocalDate;
    import java.util.Arrays;
    import java.util.LinkedList;
    import java.util.List;

    @Service
    public class MenuService {
        public Menu generate99DosaMenu(){
            User owner = User.builder()
                    .email("kumar@gmail.com")
                    .firstName("M.")
                    .lastName("Kumar")
                    .dob(LocalDate.of(1990,11,23))
                    .build();

            Hotel hotel = Hotel.builder()
                    .owner(owner)
                    .branch(Locality.HSR)
                    .name("99 Variety Dosa")
                    .cusine(Cusine.SOUTH_INDIAN)
                    .build();

            return generateMenu(hotel);
        }

        public Menu generateMenu(Hotel hotel){
            List<Item> items = getItems(hotel);

            return Menu.builder()
                    .items(items)
                    .hotel(hotel)
                    .note("It takes around 20 minutes to prepare and order")
                    .build();
        }

        public List<Item> getItems(Hotel hotel){
            return Arrays.asList(Item.builder()
                    .name("Cheese Masala Dosa")
                    .price(70)
                    .description("A Taste of Cheese...")
                    .build(),
                    Item.builder()
                            .name("Corn Paneer Masala Dosa")
                            .price(70)
                            .description("A Taste of Corn with Yummy Paneer...")
                            .build());
        }
    }
