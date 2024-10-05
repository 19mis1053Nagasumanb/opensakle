package com.example.restaurant_order_management.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "menu_items")
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private String sub_category;
    private int available_quantity;
    private double price;
    private String image_url;
    private String type;
}
