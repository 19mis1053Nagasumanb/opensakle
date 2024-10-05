package com.example.restaurant_order_management.model;

import jakarta.persistence.*;
import lombok.Data;

//import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String Name;

//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    @JoinColumn(name = "order_id")
//    private List<MenuItem> items;
}
