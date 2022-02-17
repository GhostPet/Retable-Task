import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, Entity, UpdateDateColumn, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../categories/categories.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @ManyToOne<Category>(type => Category, category => category.products)
    category: Category;

    @ApiProperty()
    @Column()
    price: number;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column()
    imageUrl: string;

    @ApiProperty()
    @Column()
    isAvailable: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}