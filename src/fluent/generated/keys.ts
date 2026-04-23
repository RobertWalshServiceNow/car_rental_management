import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '7777c243a62e4f71b8688d4b367a58d0'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '29f9e48e0f4b4c058be1a4019427c816'
                    }
                }
                composite: [
                    {
                        table: 'sys_security_acl_role'
                        id: '09714ed13b021210cf98dda9d41eeb2c'
                        key: {
                            sys_security_acl: '49714ed13b021210cf98dda9d41eeb29'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '11714ed13b021210cf98dda9d41eeb98'
                        key: {
                            sys_security_acl: '91714ed13b021210cf98dda9d41eeb95'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '11714ed13b021210cf98dda9d41eebb6'
                        key: {
                            sys_security_acl: '91714ed13b021210cf98dda9d41eebb3'
                            sys_user_role: {
                                id: '91714ed13b021210cf98dda9d41eebac'
                                key: {
                                    name: 'sn_car_rental_ma_0.customer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1233f64c73324e878582c9749dcb745c'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'availability'
                            value: 'unavailable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '129d4e053b054db596443900398c6e1f'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'availability'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '13f62b5fff940310cf98ffffffffff5a'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '15714ed13b021210cf98dda9d41eebc2'
                        key: {
                            sys_security_acl: '95714ed13b021210cf98dda9d41eebbf'
                            sys_user_role: {
                                id: '91714ed13b021210cf98dda9d41eebac'
                                key: {
                                    name: 'sn_car_rental_ma_0.customer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1610ff9290954971b39b122f82ab81b4'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '168c515a18954d348d91b5eb4fabf6ae'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19af5caa6ffe4ff4b881da4b3b7dbb6b'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19b764e1147f478eb098c334f3c0fd0b'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                            element: 'rental_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1bed9ccf43244ab8bf5dbfb2f3ece246'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'make'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1dc725a574c54959a19a2b8239170339'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                            element: 'address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c10c063b4fa420a8d2fc494719ef10c'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                            element: 'customer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '3b55835ed2df49fca2288dbfd0d3e9fb'
                        key: {
                            logical_table_name: 'sn_car_rental_ma_0_rental_agreement'
                            col_name_string: 'customer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3fcbec0c0d76465490f21426dd111734'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '41714ed13b021210cf98dda9d41eeb0c'
                        key: {
                            sys_security_acl: 'c1714ed13b021210cf98dda9d41eeb07'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49714ed13b021210cf98dda9d41eeb77'
                        key: {
                            sys_security_acl: '05714ed13b021210cf98dda9d41eeb68'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '59714ed13b021210cf98dda9d41eeb81'
                        key: {
                            sys_security_acl: 'c9714ed13b021210cf98dda9d41eeb7e'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '59e08ab0ccdf48fe9d08e9599436b6b3'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                            element: 'customer'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5bf62b5fff940310cf98ffffffffff31'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c71cad13b021210cf98dda9d41eeba9'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '5db48995199541518b338d1249f81d88'
                        key: {
                            logical_table_name: 'sn_car_rental_ma_0_rental_agreement'
                            col_name_string: 'car'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '602d24190b474826955db9c1563a11f9'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'model'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61ee8345e0c449a4bbe90c8f9e257c56'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                            element: 'address'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '680cfae88d774998abcf0bbaf5d5d1fd'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                            element: 'car'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68710ed13b021210cf98dda9d41eeb61'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ea7bfd08ed247799d388659aa405e4a'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6fba9bd96f4b479c8fd83bfd8d002d2f'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '700fcc94b12643c7a536bc8d32d5969c'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                            element: 'phone_number'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '74710ed13b021210cf98dda9d41eebe0'
                        key: {
                            name: 'sn_car_rental_ma_0.rental_agent'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '81714ed13b021210cf98dda9d41eeb61'
                        key: {
                            sys_security_acl: '05714ed13b021210cf98dda9d41eeb5e'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '85714ed13b021210cf98dda9d41eeb18'
                        key: {
                            sys_security_acl: 'c5714ed13b021210cf98dda9d41eeb15'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8803d9431bc94e1f85d6d28d423deb92'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'year'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '91714ed13b021210cf98dda9d41eebac'
                        key: {
                            name: 'sn_car_rental_ma_0.customer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a042dcf3f164303a5e686a71b1ab4a8'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                            element: 'phone_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'acd1931414a14ea0861f8a6681b247b9'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b79e1505987248cc9eb844f2c76f3a4f'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'availability'
                            value: 'available'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c408a2281cfe4d7ab6d6100ac4f77d86'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c56d9f0bce954a3b91645c0e0ec3628f'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                            element: 'car'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c5714ed13b021210cf98dda9d41eeb22'
                        key: {
                            sys_security_acl: '09714ed13b021210cf98dda9d41eeb1f'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c7f6e75fff940310cf98ffffffffffef'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c8718ad13b021210cf98dda9d41eebb9'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c9714ed13b021210cf98dda9d41eeb38'
                        key: {
                            sys_security_acl: '4d714ed13b021210cf98dda9d41eeb35'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c9714ed13b021210cf98dda9d41eeb42'
                        key: {
                            sys_security_acl: '4d714ed13b021210cf98dda9d41eeb3f'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c9714ed13b021210cf98dda9d41eeb4c'
                        key: {
                            sys_security_acl: '4d714ed13b021210cf98dda9d41eeb49'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c9714ed13b021210cf98dda9d41eeb56'
                        key: {
                            sys_security_acl: '4d714ed13b021210cf98dda9d41eeb53'
                            sys_user_role: {
                                id: '74710ed13b021210cf98dda9d41eebe0'
                                key: {
                                    name: 'sn_car_rental_ma_0.rental_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cadc2d03b1564d1cbb2767cfd5791b45'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cbc2a6d0158b4448954b30677959c0a0'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'availability'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd513fcaff22343558b257dbe1e9456b4'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                            element: 'rental_end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd55c852e995242448447af67100b7b90'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                            element: 'make'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc9341034d0e42508425f52d40be0f14'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                            element: 'rental_start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'deae1f7176304ac8aff74ca9ba27e314'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1e94416c93a42b99de1a13049528bb3'
                        key: {
                            name: 'sn_car_rental_ma_0_customer'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e875d2d9ea87471d828145bd1b392147'
                        key: {
                            name: 'sn_car_rental_ma_0_car'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd231b28366d40dab9fd1a4e3c2d6f74'
                        key: {
                            name: 'sn_car_rental_ma_0_rental_agreement'
                            element: 'rental_start_date'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
