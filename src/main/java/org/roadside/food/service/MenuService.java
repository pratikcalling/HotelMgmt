    package org.roadside.food.service;

    import org.roadside.food.model.*;
    import org.springframework.stereotype.Service;

    import java.time.LocalDate;
    import java.util.*;

    @Service
    public class MenuService {
        public Menu generate99DosaMenu(){
            User owner1 = User.builder()
                    .email("kumar@gmail.com")
                    .firstName("Kumar")
                    .lastName("")
                    .phoneNumber("+91 9900926608")
                    .dob(LocalDate.of(1990,11,23))
                    .build();

            User owner2 = User.builder()
                    .email("puneeth@gmail.com")
                    .firstName("Puneeth")
                    .lastName("")
                    .phoneNumber("+91 7676074446")
                    .dob(LocalDate.of(1990,11,23))
                    .build();

            Set<User> owners = new HashSet<>(Arrays.asList(owner1,owner2));

            Hotel hotel = Hotel.builder()
                    .owners(owners)
                    .branch(Locality.HSR)
                    .name("Sri Durga 99 Variety Dosa")
                    .cusine(Cusine.SOUTH_INDIAN)
                    .hotelLogoOpt(Optional.of("durga-ma-trans.png"))
                    .build();

            return generateMenu(hotel);
        }

        public Menu generateMenu(Hotel hotel){
            List<Item> items = getItems(hotel);

            return Menu.builder()
                    .items(items)
                    .dishLogoOpt(Optional.of("99-variety-dosa-vendor-trans.png"))
                    .hotel(hotel)
                    .notes(Arrays.asList("\"To lose Patience is To Lose Battle\". Please wait for 20 mins once you order","\"There is no Planet-B\". Parcel Charges Extra: 5/-"))
                    .build();
        }

        public List<Item> getItems(Hotel hotel){
            return Arrays.asList(Item.builder()
                    .name("Cheese Masala Dosa")
                    .price(70)
                    .description("A Taste of Cheese...")
                    .category("Cheese Dosas")
                    .build(),
                    Item.builder()
                            .name("Corn Paneer Masala Dosa")
                            .price(70)
                            .description("A Taste of Corn with Yummy Paneer...")
                            .category("Paneer Dosas")
                            .build(),
                    Item.builder()
                            .name("Corn Paneer Masala Dosa")
                            .price(70)
                            .description("A Taste of Corn with Yummy Paneer...")
                            .category("Paneer Dosas")
                            .build(),
                    Item.builder()
                            .name("Corn Paneer Cheese Masala Dosa")
                            .price(70)
                            .description("A Taste of Corn with Yummy Paneer...")
                            .category("Paneer Cheese Dosas")
                            .build(),
                    Item.builder()
                            .name("Corn Paneer Masala Dosa")
                            .price(70)
                            .description("A Taste of Corn with Yummy Paneer...")
                            .category("Paneer Dosas")
                            .build(),
                    Item.builder()
                            .name("Corn Cheese Paneer Masala Dosa")
                            .price(70)
                            .description("A Taste of Corn with Yummy Paneer...")
                            .category("Cheese Dosas")
                            .build(),
                    Item.builder()
                            .name("Pav Bhaji Masala Dosa")
                            .price(70)
                            .description("A Taste of Corn with Yummy Paneer...")
                            .category("Special Dosas")
                            .build());
        }
    }
