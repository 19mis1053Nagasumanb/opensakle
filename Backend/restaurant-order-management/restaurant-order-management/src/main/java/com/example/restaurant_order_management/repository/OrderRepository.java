package com.example.restaurant_order_management.repository;

import com.example.restaurant_order_management.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
