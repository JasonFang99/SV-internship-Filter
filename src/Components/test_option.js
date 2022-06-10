export const options_tree = {
    "id": {
        "type": "<class 'rest_framework.fields.IntegerField'>",
        "label": "ID",
        "flatlabel": "ID"
    },
    "voyage_itinerary": {
        "type": "table",
        "label": "Itinerary",
        "flatlabel": "Itinerary",
        "id": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "ID",
            "flatlabel": "Itinerary : ID"
        },
        "port_of_departure": {
            "type": "table",
            "label": "Port of departure (PORTDEP)",
            "flatlabel": "Itinerary : Port of departure (PORTDEP)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Port of departure (PORTDEP) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Port of departure (PORTDEP) : Location : Show on voyage map"
                }
            }
        },
        "int_first_port_emb": {
            "type": "table",
            "label": "First intended port of embarkation (EMBPORT)",
            "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : First intended port of embarkation (EMBPORT) : Location : Show on voyage map"
                }
            }
        },
        "int_second_port_emb": {
            "type": "table",
            "label": "Second intended port of embarkation (EMBPORT2)",
            "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Second intended port of embarkation (EMBPORT2) : Location : Show on voyage map"
                }
            }
        },
        "int_first_region_purchase_slaves": {
            "type": "table",
            "label": "First intended region of purchase of slaves (EMBREG)",
            "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : First intended region of purchase of slaves (EMBREG) : Location : Show on voyage map"
                }
            }
        },
        "int_second_region_purchase_slaves": {
            "type": "table",
            "label": "Second intended region of purchase of slaves (EMBREG2)",
            "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Second intended region of purchase of slaves (EMBREG2) : Location : Show on voyage map"
                }
            }
        },
        "int_first_port_dis": {
            "type": "table",
            "label": "First intended port of disembarkation (ARRPORT)",
            "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : First intended port of disembarkation (ARRPORT) : Location : Show on voyage map"
                }
            }
        },
        "int_second_port_dis": {
            "type": "table",
            "label": "Second intended port of disembarkation (ARRPORT2)",
            "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Second intended port of disembarkation (ARRPORT2) : Location : Show on voyage map"
                }
            }
        },
        "int_first_region_slave_landing": {
            "type": "table",
            "label": "First intended region of slave landing (REGARR)",
            "flatlabel": "Itinerary : First intended region of slave landing (REGARR)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : First intended region of slave landing (REGARR) : Location : Show on voyage map"
                }
            }
        },
        "imp_principal_region_slave_dis": {
            "type": "table",
            "label": "Imputed principal region of slave disembarkation (MJSELIMP)",
            "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Imputed principal region of slave disembarkation (MJSELIMP) : Location : Show on voyage map"
                }
            }
        },
        "int_second_place_region_slave_landing": {
            "type": "table",
            "label": "Second intended region of slave landing (REGARR2)",
            "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Second intended region of slave landing (REGARR2) : Location : Show on voyage map"
                }
            }
        },
        "first_place_slave_purchase": {
            "type": "table",
            "label": "First place of slave purchase (PLAC1TRA)",
            "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : First place of slave purchase (PLAC1TRA) : Location : Show on voyage map"
                }
            }
        },
        "second_place_slave_purchase": {
            "type": "table",
            "label": "Second place of slave purchase (PLAC2TRA)",
            "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Second place of slave purchase (PLAC2TRA) : Location : Show on voyage map"
                }
            }
        },
        "third_place_slave_purchase": {
            "type": "table",
            "label": "Third place of slave purchase (PLAC3TRA)",
            "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Third place of slave purchase (PLAC3TRA) : Location : Show on voyage map"
                }
            }
        },
        "first_region_slave_emb": {
            "type": "table",
            "label": "First region of embarkation of slaves (REGEM1)",
            "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : First region of embarkation of slaves (REGEM1) : Location : Show on voyage map"
                }
            }
        },
        "second_region_slave_emb": {
            "type": "table",
            "label": "Second region of embarkation of slaves (REGEM2)",
            "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Second region of embarkation of slaves (REGEM2) : Location : Show on voyage map"
                }
            }
        },
        "third_region_slave_emb": {
            "type": "table",
            "label": "Third region of embarkation of slaves (REGEM3)",
            "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Third region of embarkation of slaves (REGEM3) : Location : Show on voyage map"
                }
            }
        },
        "port_of_call_before_atl_crossing": {
            "type": "table",
            "label": "Port of call before Atlantic crossing (NPAFTTRA)",
            "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Port of call before Atlantic crossing (NPAFTTRA) : Location : Show on voyage map"
                }
            }
        },
        "first_landing_place": {
            "type": "table",
            "label": "First place of slave landing (SLA1PORT)",
            "flatlabel": "Itinerary : First place of slave landing (SLA1PORT)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : First place of slave landing (SLA1PORT) : Location : Show on voyage map"
                }
            }
        },
        "second_landing_place": {
            "type": "table",
            "label": "Second place of slave landing (ADPSALE1)",
            "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Second place of slave landing (ADPSALE1) : Location : Show on voyage map"
                }
            }
        },
        "third_landing_place": {
            "type": "table",
            "label": "Third place of slave landing (ADPSALE2)",
            "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Third place of slave landing (ADPSALE2) : Location : Show on voyage map"
                }
            }
        },
        "first_landing_region": {
            "type": "table",
            "label": "First region of slave landing (REGDIS1)",
            "flatlabel": "Itinerary : First region of slave landing (REGDIS1)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : First region of slave landing (REGDIS1) : Location : Show on voyage map"
                }
            }
        },
        "second_landing_region": {
            "type": "table",
            "label": "Second region of slave landing (REGDIS2)",
            "flatlabel": "Itinerary : Second region of slave landing (REGDIS2)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Second region of slave landing (REGDIS2) : Location : Show on voyage map"
                }
            }
        },
        "third_landing_region": {
            "type": "table",
            "label": "Third region of slave landing (REGDIS3)",
            "flatlabel": "Itinerary : Third region of slave landing (REGDIS3)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Third region of slave landing (REGDIS3) : Location : Show on voyage map"
                }
            }
        },
        "place_voyage_ended": {
            "type": "table",
            "label": "Place at which voyage ended (PORTRET)",
            "flatlabel": "Itinerary : Place at which voyage ended (PORTRET)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Place at which voyage ended (PORTRET) : Location : Show on voyage map"
                }
            }
        },
        "region_of_return": {
            "type": "table",
            "label": "Region of return (RETRNREG)",
            "flatlabel": "Itinerary : Region of return (RETRNREG)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Region of return (RETRNREG) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Region of return (RETRNREG) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Region of return (RETRNREG) : Location : Show on voyage map"
                }
            }
        },
        "broad_region_of_return": {
            "type": "table",
            "label": "Broad region of return (RETRNREG1)",
            "flatlabel": "Itinerary : Broad region of return (RETRNREG1)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Broad region of return (RETRNREG1) : Location : Show on voyage map"
                }
            }
        },
        "imp_port_voyage_begin": {
            "type": "table",
            "label": "Imputed port where voyage began (PTDEPIMP)",
            "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Imputed port where voyage began (PTDEPIMP) : Location : Show on voyage map"
                }
            }
        },
        "imp_region_voyage_begin": {
            "type": "table",
            "label": "Imputed region where voyage began (DEPTREGIMP)",
            "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Imputed region where voyage began (DEPTREGIMP) : Location : Show on voyage map"
                }
            }
        },
        "imp_broad_region_voyage_begin": {
            "type": "table",
            "label": "Imputed broad region where voyage began (DEPTREGIMP1)",
            "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Imputed broad region where voyage began (DEPTREGIMP1) : Location : Show on voyage map"
                }
            }
        },
        "principal_place_of_slave_purchase": {
            "type": "table",
            "label": "Principal place of slave purchase (MAJBUYPT)",
            "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Principal place of slave purchase (MAJBUYPT) : Location : Show on voyage map"
                }
            }
        },
        "imp_principal_place_of_slave_purchase": {
            "type": "table",
            "label": "Imputed principal place of slave purchase (MJBYPTIMP)",
            "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Imputed principal place of slave purchase (MJBYPTIMP) : Location : Show on voyage map"
                }
            }
        },
        "imp_principal_region_of_slave_purchase": {
            "type": "table",
            "label": "Imputed principal region of slave purchase (MAJBYIMP)",
            "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Imputed principal region of slave purchase (MAJBYIMP) : Location : Show on voyage map"
                }
            }
        },
        "imp_broad_region_of_slave_purchase": {
            "type": "table",
            "label": "Imputed principal broad region of slave purchase (MAJBYIMP1)",
            "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Imputed principal broad region of slave purchase (MAJBYIMP1) : Location : Show on voyage map"
                }
            }
        },
        "principal_port_of_slave_dis": {
            "type": "table",
            "label": "Principal port of slave disembarkation (MAJSELPT)",
            "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Principal port of slave disembarkation (MAJSELPT) : Location : Show on voyage map"
                }
            }
        },
        "imp_principal_port_slave_dis": {
            "type": "table",
            "label": "Imputed principal port of slave disembarkation (MJSLPTIMP)",
            "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Imputed principal port of slave disembarkation (MJSLPTIMP) : Location : Show on voyage map"
                }
            }
        },
        "imp_broad_region_slave_dis": {
            "type": "table",
            "label": "Imputed broad region of slave disembarkation (MJSELIMP1)",
            "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1)",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Itinerary : Imputed broad region of slave disembarkation (MJSELIMP1) : Location : Show on voyage map"
                }
            }
        },
        "ports_called_buying_slaves": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of ports of call prior to buying slaves (NPPRETRA)",
            "flatlabel": "Itinerary : Number of ports of call prior to buying slaves (NPPRETRA)"
        },
        "number_of_ports_of_call": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of ports of call in Americas prior to sale of slaves (NPPRIOR)",
            "flatlabel": "Itinerary : Number of ports of call in Americas prior to sale of slaves (NPPRIOR)"
        },
        "voyage": {
            "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
            "label": "Voyage",
            "flatlabel": "Itinerary : Voyage"
        }
    },
    "voyage_dates": {
        "type": "table",
        "label": "Dates",
        "flatlabel": "Dates",
        "id": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "ID",
            "flatlabel": "Dates : ID"
        },
        "voyage_began": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Date that voyage began (DATEDEPB,A,C)",
            "flatlabel": "Dates : Date that voyage began (DATEDEPB,A,C)"
        },
        "voyage_began_mm": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Month that voyage began (DATEDEPB,A,C)",
            "flatlabel": "Dates : Month that voyage began (DATEDEPB,A,C)"
        },
        "voyage_began_dd": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Day that voyage began (DATEDEPB,A,C)",
            "flatlabel": "Dates : Day that voyage began (DATEDEPB,A,C)"
        },
        "voyage_began_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year that voyage began (DATEDEPB,A,C)",
            "flatlabel": "Dates : Year that voyage began (DATEDEPB,A,C)"
        },
        "slave_purchase_began": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Date that slave purchase began (D1SLATRB,A,C)",
            "flatlabel": "Dates : Date that slave purchase began (D1SLATRB,A,C)"
        },
        "slave_purchase_began_mm": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Month that slave purchase began (D1SLATRB,A,C)",
            "flatlabel": "Dates : Month that slave purchase began (D1SLATRB,A,C)"
        },
        "slave_purchase_began_dd": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Day that slave purchase began (D1SLATRB,A,C)",
            "flatlabel": "Dates : Day that slave purchase began (D1SLATRB,A,C)"
        },
        "slave_purchase_began_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year that slave purchase began (D1SLATRB,A,C)",
            "flatlabel": "Dates : Year that slave purchase began (D1SLATRB,A,C)"
        },
        "vessel_left_port": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Date that vessel left last slaving port (DLSLATRB,A,C)",
            "flatlabel": "Dates : Date that vessel left last slaving port (DLSLATRB,A,C)"
        },
        "vessel_left_port_mm": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Month that vessel left last slaving port (DLSLATRB,A,C)",
            "flatlabel": "Dates : Month that vessel left last slaving port (DLSLATRB,A,C)"
        },
        "vessel_left_port_dd": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Day that vessel left last slaving port (DLSLATRB,A,C)",
            "flatlabel": "Dates : Day that vessel left last slaving port (DLSLATRB,A,C)"
        },
        "vessel_left_port_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year that vessel left last slaving port (DLSLATRB,A,C)",
            "flatlabel": "Dates : Year that vessel left last slaving port (DLSLATRB,A,C)"
        },
        "first_dis_of_slaves": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Date of first disembarkation of slaves (DATARR33,32,34)",
            "flatlabel": "Dates : Date of first disembarkation of slaves (DATARR33,32,34)"
        },
        "first_dis_of_slaves_mm": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Month of first disembarkation of slaves (DATARR33,32,34)",
            "flatlabel": "Dates : Month of first disembarkation of slaves (DATARR33,32,34)"
        },
        "first_dis_of_slaves_dd": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Day of first disembarkation of slaves (DATARR33,32,34)",
            "flatlabel": "Dates : Day of first disembarkation of slaves (DATARR33,32,34)"
        },
        "first_dis_of_slaves_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year of first disembarkation of slaves (DATARR33,32,34)",
            "flatlabel": "Dates : Year of first disembarkation of slaves (DATARR33,32,34)"
        },
        "date_departed_africa": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Date vessel departed Africa (DATELEFTAFR)",
            "flatlabel": "Dates : Date vessel departed Africa (DATELEFTAFR)"
        },
        "date_departed_africa_mm": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Month vessel departed Africa (DATELEFTAFR)",
            "flatlabel": "Dates : Month vessel departed Africa (DATELEFTAFR)"
        },
        "date_departed_africa_dd": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Day vessel departed Africa (DATELEFTAFR)",
            "flatlabel": "Dates : Day vessel departed Africa (DATELEFTAFR)"
        },
        "date_departed_africa_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year vessel departed Africa (DATELEFTAFR)",
            "flatlabel": "Dates : Year vessel departed Africa (DATELEFTAFR)"
        },
        "arrival_at_second_place_landing": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Date of arrival at second place of landing (DATARR37,36,38)",
            "flatlabel": "Dates : Date of arrival at second place of landing (DATARR37,36,38)"
        },
        "arrival_at_second_place_landing_mm": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Month of arrival at second place of landing (DATARR37,36,38)",
            "flatlabel": "Dates : Month of arrival at second place of landing (DATARR37,36,38)"
        },
        "arrival_at_second_place_landing_dd": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Day of arrival at second place of landing (DATARR37,36,38)",
            "flatlabel": "Dates : Day of arrival at second place of landing (DATARR37,36,38)"
        },
        "arrival_at_second_place_landing_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year of arrival at second place of landing (DATARR37,36,38)",
            "flatlabel": "Dates : Year of arrival at second place of landing (DATARR37,36,38)"
        },
        "third_dis_of_slaves": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Date of third disembarkation of slaves (DATARR40,39,41)",
            "flatlabel": "Dates : Date of third disembarkation of slaves (DATARR40,39,41)"
        },
        "third_dis_of_slaves_mm": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Month of third disembarkation of slaves (DATARR40,39,41)",
            "flatlabel": "Dates : Month of third disembarkation of slaves (DATARR40,39,41)"
        },
        "third_dis_of_slaves_dd": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Day of third disembarkation of slaves (DATARR40,39,41)",
            "flatlabel": "Dates : Day of third disembarkation of slaves (DATARR40,39,41)"
        },
        "third_dis_of_slaves_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year of third disembarkation of slaves (DATARR40,39,41)",
            "flatlabel": "Dates : Year of third disembarkation of slaves (DATARR40,39,41)"
        },
        "departure_last_place_of_landing": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Date of departure from last place of landing (DDEPAMB,*,C)",
            "flatlabel": "Dates : Date of departure from last place of landing (DDEPAMB,*,C)"
        },
        "departure_last_place_of_landing_mm": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Month of departure from last place of landing (DDEPAMB,*,C)",
            "flatlabel": "Dates : Month of departure from last place of landing (DDEPAMB,*,C)"
        },
        "departure_last_place_of_landing_dd": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Day of departure from last place of landing (DDEPAMB,*,C)",
            "flatlabel": "Dates : Day of departure from last place of landing (DDEPAMB,*,C)"
        },
        "departure_last_place_of_landing_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year of departure from last place of landing (DDEPAMB,*,C)",
            "flatlabel": "Dates : Year of departure from last place of landing (DDEPAMB,*,C)"
        },
        "voyage_completed": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Date on which slave voyage completed (DATARR44,43,45)",
            "flatlabel": "Dates : Date on which slave voyage completed (DATARR44,43,45)"
        },
        "voyage_completed_mm": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Month on which slave voyage completed (DATARR44,43,45)",
            "flatlabel": "Dates : Month on which slave voyage completed (DATARR44,43,45)"
        },
        "voyage_completed_dd": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Day on which slave voyage completed (DATARR44,43,45)",
            "flatlabel": "Dates : Day on which slave voyage completed (DATARR44,43,45)"
        },
        "voyage_completed_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year on which slave voyage completed (DATARR44,43,45)",
            "flatlabel": "Dates : Year on which slave voyage completed (DATARR44,43,45)"
        },
        "length_middle_passage_days": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Length of Middle Passage in (days) (VOYAGE)",
            "flatlabel": "Dates : Length of Middle Passage in (days) (VOYAGE)"
        },
        "imp_voyage_began": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Year voyage began",
            "flatlabel": "Dates : Year voyage began"
        },
        "imp_voyage_began_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year voyage began",
            "flatlabel": "Dates : Year voyage began"
        },
        "imp_departed_africa": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Year departed Africa",
            "flatlabel": "Dates : Year departed Africa"
        },
        "imp_departed_africa_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year departed Africa",
            "flatlabel": "Dates : Year departed Africa"
        },
        "imp_arrival_at_port_of_dis": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Year of arrival at port of disembarkation (YEARAM)",
            "flatlabel": "Dates : Year of arrival at port of disembarkation (YEARAM)"
        },
        "imp_arrival_at_port_of_dis_yyyy": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year of arrival at port of disembarkation (YEARAM)",
            "flatlabel": "Dates : Year of arrival at port of disembarkation (YEARAM)"
        },
        "imp_length_home_to_disembark": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Voyage length from home port to disembarkation (days) (VOY1IMP)",
            "flatlabel": "Dates : Voyage length from home port to disembarkation (days) (VOY1IMP)"
        },
        "imp_length_leaving_africa_to_disembark": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Voyage length from last slave embarkation to first disembarkation (days) (VOY2IMP)",
            "flatlabel": "Dates : Voyage length from last slave embarkation to first disembarkation (days) (VOY2IMP)"
        },
        "voyage": {
            "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
            "label": "Voyage",
            "flatlabel": "Dates : Voyage"
        }
    },
    "voyage_groupings": {
        "type": "table",
        "label": "Voyage Groupings",
        "flatlabel": "Voyage Groupings",
        "id": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "ID",
            "flatlabel": "Voyage Groupings : ID"
        },
        "name": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Name",
            "flatlabel": "Voyage Groupings : Name"
        },
        "value": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Value",
            "flatlabel": "Voyage Groupings : Value"
        }
    },
    "voyage_crew": {
        "type": "table",
        "label": "Crew",
        "flatlabel": "Crew",
        "id": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "ID",
            "flatlabel": "Crew : ID"
        },
        "crew_voyage_outset": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew at voyage outset",
            "flatlabel": "Crew : Crew at voyage outset"
        },
        "crew_departure_last_port": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew at departure from last port of slave purchase",
            "flatlabel": "Crew : Crew at departure from last port of slave purchase"
        },
        "crew_first_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew at first landing of slaves",
            "flatlabel": "Crew : Crew at first landing of slaves"
        },
        "crew_return_begin": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew when return voyage begin",
            "flatlabel": "Crew : Crew when return voyage begin"
        },
        "crew_end_voyage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew at end of voyage",
            "flatlabel": "Crew : Crew at end of voyage"
        },
        "unspecified_crew": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of crew unspecified",
            "flatlabel": "Crew : Number of crew unspecified"
        },
        "crew_died_before_first_trade": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew died before first place of trade in Africa",
            "flatlabel": "Crew : Crew died before first place of trade in Africa"
        },
        "crew_died_while_ship_african": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew died while ship was on African coast",
            "flatlabel": "Crew : Crew died while ship was on African coast"
        },
        "crew_died_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew died during Middle Passage",
            "flatlabel": "Crew : Crew died during Middle Passage"
        },
        "crew_died_in_americas": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew died in the Americas",
            "flatlabel": "Crew : Crew died in the Americas"
        },
        "crew_died_on_return_voyage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew died on return voyage",
            "flatlabel": "Crew : Crew died on return voyage"
        },
        "crew_died_complete_voyage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Crew died during complete voyage",
            "flatlabel": "Crew : Crew died during complete voyage"
        },
        "crew_deserted": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total number of crew deserted",
            "flatlabel": "Crew : Total number of crew deserted"
        },
        "voyage": {
            "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
            "label": "Voyage",
            "flatlabel": "Crew : Voyage"
        }
    },
    "voyage_ship": {
        "type": "table",
        "label": "Ship",
        "flatlabel": "Ship",
        "id": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "ID",
            "flatlabel": "Ship : ID"
        },
        "rig_of_vessel": {
            "type": "table",
            "label": "Rig of Vessel",
            "flatlabel": "Ship : Rig of Vessel",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Ship : Rig of Vessel : ID"
            },
            "name": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Name",
                "flatlabel": "Ship : Rig of Vessel : Name"
            },
            "value": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "Value",
                "flatlabel": "Ship : Rig of Vessel : Value"
            }
        },
        "imputed_nationality": {
            "type": "table",
            "label": "Imputed Ship Nationality",
            "flatlabel": "Ship : Imputed Ship Nationality",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Ship : Imputed Ship Nationality : ID"
            },
            "name": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Name",
                "flatlabel": "Ship : Imputed Ship Nationality : Name"
            },
            "value": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "Value",
                "flatlabel": "Ship : Imputed Ship Nationality : Value"
            }
        },
        "ton_type": {
            "type": "table",
            "label": "Type of Tonnage",
            "flatlabel": "Ship : Type of Tonnage",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Ship : Type of Tonnage : ID"
            },
            "name": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Name",
                "flatlabel": "Ship : Type of Tonnage : Name"
            },
            "value": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "Value",
                "flatlabel": "Ship : Type of Tonnage : Value"
            }
        },
        "vessel_construction_place": {
            "type": "table",
            "label": "Place where vessel constructed",
            "flatlabel": "Ship : Place where vessel constructed",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Ship : Place where vessel constructed : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Ship : Place where vessel constructed : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Ship : Place where vessel constructed : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Ship : Place where vessel constructed : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Ship : Place where vessel constructed : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Ship : Place where vessel constructed : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Ship : Place where vessel constructed : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Ship : Place where vessel constructed : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Ship : Place where vessel constructed : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Ship : Place where vessel constructed : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Ship : Place where vessel constructed : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Ship : Place where vessel constructed : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Ship : Place where vessel constructed : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Ship : Place where vessel constructed : Location : Show on voyage map"
                }
            }
        },
        "vessel_construction_region": {
            "type": "table",
            "label": "Region where vessel constructed",
            "flatlabel": "Ship : Region where vessel constructed",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Ship : Region where vessel constructed : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Ship : Region where vessel constructed : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Ship : Region where vessel constructed : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Ship : Region where vessel constructed : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Ship : Region where vessel constructed : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Ship : Region where vessel constructed : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Ship : Region where vessel constructed : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Ship : Region where vessel constructed : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Ship : Region where vessel constructed : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Ship : Region where vessel constructed : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Ship : Region where vessel constructed : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Ship : Region where vessel constructed : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Ship : Region where vessel constructed : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Ship : Region where vessel constructed : Location : Show on voyage map"
                }
            }
        },
        "registered_place": {
            "type": "table",
            "label": "Place where vessel registered",
            "flatlabel": "Ship : Place where vessel registered",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Ship : Place where vessel registered : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Ship : Place where vessel registered : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Ship : Place where vessel registered : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Ship : Place where vessel registered : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Ship : Place where vessel registered : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Ship : Place where vessel registered : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Ship : Place where vessel registered : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Place where vessel registered : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Ship : Place where vessel registered : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Ship : Place where vessel registered : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Place where vessel registered : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Ship : Place where vessel registered : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Ship : Place where vessel registered : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Ship : Place where vessel registered : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Ship : Place where vessel registered : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Ship : Place where vessel registered : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Ship : Place where vessel registered : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Ship : Place where vessel registered : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Ship : Place where vessel registered : Location : Show on voyage map"
                }
            }
        },
        "registered_region": {
            "type": "table",
            "label": "Region where vessel registered",
            "flatlabel": "Ship : Region where vessel registered",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Ship : Region where vessel registered : ID"
            },
            "geo_location": {
                "type": "table",
                "label": "Location",
                "flatlabel": "Ship : Region where vessel registered : Location",
                "id": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "ID",
                    "flatlabel": "Ship : Region where vessel registered : Location : ID"
                },
                "child_of": {
                    "type": "table",
                    "label": "Child of",
                    "flatlabel": "Ship : Region where vessel registered : Location : Child of",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Ship : Region where vessel registered : Location : Child of : Polygon"
                    }
                },
                "parent_of": {
                    "type": "table",
                    "label": "Geographic Location",
                    "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Location name",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : Location name"
                    },
                    "longitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Longitude of Centroid",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : Longitude of Centroid"
                    },
                    "latitude": {
                        "type": "<class 'rest_framework.fields.DecimalField'>",
                        "label": "Latitude of Centroid",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : Latitude of Centroid"
                    },
                    "value": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "SPSS code",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : SPSS code"
                    },
                    "show_on_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on map",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : Show on map"
                    },
                    "show_on_main_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on main map",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : Show on main map"
                    },
                    "show_on_voyage_map": {
                        "type": "<class 'rest_framework.fields.BooleanField'>",
                        "label": "Show on voyage map",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : Show on voyage map"
                    },
                    "child_of": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Child of",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : Child of"
                    },
                    "location_type": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Location Type",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : Location Type"
                    },
                    "spatial_extent": {
                        "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                        "label": "Polygon",
                        "flatlabel": "Ship : Region where vessel registered : Location : Geographic Location : Polygon"
                    }
                },
                "spatial_extent": {
                    "type": "table",
                    "label": "Polygon",
                    "flatlabel": "Ship : Region where vessel registered : Location : Polygon",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Region where vessel registered : Location : Polygon : ID"
                    },
                    "shape": {
                        "type": "<class 'rest_framework.fields.JSONField'>",
                        "label": "Geojson Polygon",
                        "flatlabel": "Ship : Region where vessel registered : Location : Polygon : Geojson Polygon"
                    }
                },
                "location_type": {
                    "type": "table",
                    "label": "Location Type",
                    "flatlabel": "Ship : Region where vessel registered : Location : Location Type",
                    "id": {
                        "type": "<class 'rest_framework.fields.IntegerField'>",
                        "label": "ID",
                        "flatlabel": "Ship : Region where vessel registered : Location : Location Type : ID"
                    },
                    "name": {
                        "type": "<class 'rest_framework.fields.CharField'>",
                        "label": "Geographic Location Type",
                        "flatlabel": "Ship : Region where vessel registered : Location : Location Type : Geographic Location Type"
                    }
                },
                "name": {
                    "type": "<class 'rest_framework.fields.CharField'>",
                    "label": "Location name",
                    "flatlabel": "Ship : Region where vessel registered : Location : Location name"
                },
                "longitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Longitude of Centroid",
                    "flatlabel": "Ship : Region where vessel registered : Location : Longitude of Centroid"
                },
                "latitude": {
                    "type": "<class 'rest_framework.fields.DecimalField'>",
                    "label": "Latitude of Centroid",
                    "flatlabel": "Ship : Region where vessel registered : Location : Latitude of Centroid"
                },
                "value": {
                    "type": "<class 'rest_framework.fields.IntegerField'>",
                    "label": "SPSS code",
                    "flatlabel": "Ship : Region where vessel registered : Location : SPSS code"
                },
                "show_on_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on map",
                    "flatlabel": "Ship : Region where vessel registered : Location : Show on map"
                },
                "show_on_main_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on main map",
                    "flatlabel": "Ship : Region where vessel registered : Location : Show on main map"
                },
                "show_on_voyage_map": {
                    "type": "<class 'rest_framework.fields.BooleanField'>",
                    "label": "Show on voyage map",
                    "flatlabel": "Ship : Region where vessel registered : Location : Show on voyage map"
                }
            }
        },
        "ship_name": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Name of vessel",
            "flatlabel": "Ship : Name of vessel"
        },
        "tonnage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Tonnage of vessel",
            "flatlabel": "Ship : Tonnage of vessel"
        },
        "guns_mounted": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Guns mounted",
            "flatlabel": "Ship : Guns mounted"
        },
        "year_of_construction": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year of vessel's construction",
            "flatlabel": "Ship : Year of vessel's construction"
        },
        "registered_year": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Year of vessel's registration",
            "flatlabel": "Ship : Year of vessel's registration"
        },
        "tonnage_mod": {
            "type": "<class 'rest_framework.fields.DecimalField'>",
            "label": "Tonnage standardized on British measured tons 1773-1870",
            "flatlabel": "Ship : Tonnage standardized on British measured tons 1773-1870"
        },
        "nationality_ship": {
            "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
            "label": "Ship Nationality",
            "flatlabel": "Ship : Ship Nationality"
        },
        "voyage": {
            "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
            "label": "Voyage",
            "flatlabel": "Ship : Voyage"
        }
    },
    "voyage_captainconnection": {
        "type": "table",
        "label": "Voyage captain information",
        "flatlabel": "Voyage captain information",
        "id": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "ID",
            "flatlabel": "Voyage captain information : ID"
        },
        "captain": {
            "type": "table",
            "label": "Captain",
            "flatlabel": "Voyage captain information : Captain",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "Voyage captain information : Captain : ID"
            },
            "name": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Captain's name",
                "flatlabel": "Voyage captain information : Captain : Captain's name"
            }
        },
        "captain_order": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Captain order",
            "flatlabel": "Voyage captain information : Captain order"
        },
        "voyage": {
            "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
            "label": "Voyage",
            "flatlabel": "Voyage captain information : Voyage"
        }
    },
    "voyage_shipownerconnection": {
        "type": "table",
        "label": "voyage ship owner connection",
        "flatlabel": "voyage ship owner connection",
        "id": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "ID",
            "flatlabel": "voyage ship owner connection : ID"
        },
        "owner": {
            "type": "table",
            "label": "Ship Owner",
            "flatlabel": "voyage ship owner connection : Ship Owner",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "voyage ship owner connection : Ship Owner : ID"
            },
            "name": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Name",
                "flatlabel": "voyage ship owner connection : Ship Owner : Name"
            }
        },
        "owner_order": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Owner order",
            "flatlabel": "voyage ship owner connection : Owner order"
        },
        "voyage": {
            "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
            "label": "Voyage",
            "flatlabel": "voyage ship owner connection : Voyage"
        }
    },
    "voyage_slaves_numbers": {
        "type": "table",
        "label": "voyage slaves numbers",
        "flatlabel": "voyage slaves numbers",
        "id": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "ID",
            "flatlabel": "voyage slaves numbers : ID"
        },
        "slave_deaths_before_africa": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Slaves death before leaving Africa (SLADAFRI)",
            "flatlabel": "voyage slaves numbers : Slaves death before leaving Africa (SLADAFRI)"
        },
        "slave_deaths_between_africa_america": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Slaves death between Africa and Americas (SLADVOY)",
            "flatlabel": "voyage slaves numbers : Slaves death between Africa and Americas (SLADVOY)"
        },
        "slave_deaths_between_arrival_and_sale": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Slaves death before arrival and sale (SLADAMER)",
            "flatlabel": "voyage slaves numbers : Slaves death before arrival and sale (SLADAMER)"
        },
        "num_slaves_intended_first_port": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of slaves intended from first port of purchase (SLINTEND)",
            "flatlabel": "voyage slaves numbers : Number of slaves intended from first port of purchase (SLINTEND)"
        },
        "num_slaves_intended_second_port": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of slaves intended from second port of purchase (SLINTEN2)",
            "flatlabel": "voyage slaves numbers : Number of slaves intended from second port of purchase (SLINTEN2)"
        },
        "num_slaves_carried_first_port": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of slaves carried from first port of purchase (NCAR13)",
            "flatlabel": "voyage slaves numbers : Number of slaves carried from first port of purchase (NCAR13)"
        },
        "num_slaves_carried_second_port": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of slaves carried from second port of purchase (NCAR15)",
            "flatlabel": "voyage slaves numbers : Number of slaves carried from second port of purchase (NCAR15)"
        },
        "num_slaves_carried_third_port": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of slaves carried from third port of purchase (NCAR17)",
            "flatlabel": "voyage slaves numbers : Number of slaves carried from third port of purchase (NCAR17)"
        },
        "total_num_slaves_purchased": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves purchased (TSLAVESP)",
            "flatlabel": "voyage slaves numbers : Total slaves purchased (TSLAVESP)"
        },
        "total_num_slaves_dep_last_slaving_port": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves on board at departure from last slaving port (TSLAVESD)",
            "flatlabel": "voyage slaves numbers : Total slaves on board at departure from last slaving port (TSLAVESD)"
        },
        "total_num_slaves_arr_first_port_embark": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves arrived at first port of disembarkation (SLAARRIV)",
            "flatlabel": "voyage slaves numbers : Total slaves arrived at first port of disembarkation (SLAARRIV)"
        },
        "num_slaves_disembark_first_place": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of slaves disembarked at first place (SLAS32)",
            "flatlabel": "voyage slaves numbers : Number of slaves disembarked at first place (SLAS32)"
        },
        "num_slaves_disembark_second_place": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of slaves disembarked at second place (SLAS36)",
            "flatlabel": "voyage slaves numbers : Number of slaves disembarked at second place (SLAS36)"
        },
        "num_slaves_disembark_third_place": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of slaves disembarked at third place (SLAS39)",
            "flatlabel": "voyage slaves numbers : Number of slaves disembarked at third place (SLAS39)"
        },
        "imp_total_num_slaves_embarked": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves embarked imputed * (slaximp)",
            "flatlabel": "voyage slaves numbers : Total slaves embarked imputed * (slaximp)"
        },
        "imp_total_num_slaves_disembarked": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves disembarked imputed * (SLAMIMP)",
            "flatlabel": "voyage slaves numbers : Total slaves disembarked imputed * (SLAMIMP)"
        },
        "imp_jamaican_cash_price": {
            "type": "<class 'rest_framework.fields.DecimalField'>",
            "label": "Sterling cash price in Jamaica* (imputed)",
            "flatlabel": "voyage slaves numbers : Sterling cash price in Jamaica* (imputed)"
        },
        "imp_mortality_during_voyage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of slave deaths during Middle Passage (VYMRTIMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of slave deaths during Middle Passage (VYMRTIMP)"
        },
        "num_men_embark_first_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of men (MEN1) embarked at first port of purchase",
            "flatlabel": "voyage slaves numbers : Number of men (MEN1) embarked at first port of purchase"
        },
        "num_women_embark_first_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of women (WOMEN1) embarked at first port of purchase",
            "flatlabel": "voyage slaves numbers : Number of women (WOMEN1) embarked at first port of purchase"
        },
        "num_boy_embark_first_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of boys (BOY1) embarked at first port of purchase",
            "flatlabel": "voyage slaves numbers : Number of boys (BOY1) embarked at first port of purchase"
        },
        "num_girl_embark_first_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of girls (GIRL1) embarked at first port of purchase",
            "flatlabel": "voyage slaves numbers : Number of girls (GIRL1) embarked at first port of purchase"
        },
        "num_adult_embark_first_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of adults (gender unspecified) (ADULT1) embarked at first port of purchase",
            "flatlabel": "voyage slaves numbers : Number of adults (gender unspecified) (ADULT1) embarked at first port of purchase"
        },
        "num_child_embark_first_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of children (gender unspecified) (CHILD1) embarked at first port of purchase",
            "flatlabel": "voyage slaves numbers : Number of children (gender unspecified) (CHILD1) embarked at first port of purchase"
        },
        "num_infant_embark_first_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of infants (INFANT1) embarked at first port of purchase",
            "flatlabel": "voyage slaves numbers : Number of infants (INFANT1) embarked at first port of purchase"
        },
        "num_males_embark_first_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of males (age unspecified) (MALE1) embarked at first port of purchase",
            "flatlabel": "voyage slaves numbers : Number of males (age unspecified) (MALE1) embarked at first port of purchase"
        },
        "num_females_embark_first_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of females (age unspecified) (FEMALE1) embarked at first port of purchase",
            "flatlabel": "voyage slaves numbers : Number of females (age unspecified) (FEMALE1) embarked at first port of purchase"
        },
        "num_men_died_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of men (MEN2) died on Middle Passage",
            "flatlabel": "voyage slaves numbers : Number of men (MEN2) died on Middle Passage"
        },
        "num_women_died_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of women (WOMEN2) died on Middle Passage",
            "flatlabel": "voyage slaves numbers : Number of women (WOMEN2) died on Middle Passage"
        },
        "num_boy_died_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of boys (BOY2) died on Middle Passage",
            "flatlabel": "voyage slaves numbers : Number of boys (BOY2) died on Middle Passage"
        },
        "num_girl_died_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of girls (GIRL2) died on Middle Passage",
            "flatlabel": "voyage slaves numbers : Number of girls (GIRL2) died on Middle Passage"
        },
        "num_adult_died_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of adults (gender unspecified) (ADULT2) died on Middle Passage",
            "flatlabel": "voyage slaves numbers : Number of adults (gender unspecified) (ADULT2) died on Middle Passage"
        },
        "num_child_died_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of children (gender unspecified) (CHILD2) died on Middle Passage",
            "flatlabel": "voyage slaves numbers : Number of children (gender unspecified) (CHILD2) died on Middle Passage"
        },
        "num_infant_died_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of infants (INFANT2) died on Middle Passage",
            "flatlabel": "voyage slaves numbers : Number of infants (INFANT2) died on Middle Passage"
        },
        "num_males_died_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of males (age unspecified) (MALE2) died on Middle Passage",
            "flatlabel": "voyage slaves numbers : Number of males (age unspecified) (MALE2) died on Middle Passage"
        },
        "num_females_died_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of females (age unspecified) (FEMALE2) died on Middle Passage",
            "flatlabel": "voyage slaves numbers : Number of females (age unspecified) (FEMALE2) died on Middle Passage"
        },
        "num_men_disembark_first_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of men (MEN3) disembarked at first place of landing",
            "flatlabel": "voyage slaves numbers : Number of men (MEN3) disembarked at first place of landing"
        },
        "num_women_disembark_first_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of women (WOMEN3) disembarked at first place of landing",
            "flatlabel": "voyage slaves numbers : Number of women (WOMEN3) disembarked at first place of landing"
        },
        "num_boy_disembark_first_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of boys (BOY3) disembarked at first place of landing",
            "flatlabel": "voyage slaves numbers : Number of boys (BOY3) disembarked at first place of landing"
        },
        "num_girl_disembark_first_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of girls (GIRL3) disembarked at first place of landing",
            "flatlabel": "voyage slaves numbers : Number of girls (GIRL3) disembarked at first place of landing"
        },
        "num_adult_disembark_first_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of adults (gender unspecified) (ADULT3) disembarked at first place of landing",
            "flatlabel": "voyage slaves numbers : Number of adults (gender unspecified) (ADULT3) disembarked at first place of landing"
        },
        "num_child_disembark_first_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of children (gender unspecified) (CHILD3) disembarked at first place of landing",
            "flatlabel": "voyage slaves numbers : Number of children (gender unspecified) (CHILD3) disembarked at first place of landing"
        },
        "num_infant_disembark_first_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of infants (INFANT3) disembarked at first place of landing",
            "flatlabel": "voyage slaves numbers : Number of infants (INFANT3) disembarked at first place of landing"
        },
        "num_males_disembark_first_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of males (age unspecified) (MALE3) disembarked at first place of landing",
            "flatlabel": "voyage slaves numbers : Number of males (age unspecified) (MALE3) disembarked at first place of landing"
        },
        "num_females_disembark_first_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of females (age unspecified) (FEMALE3) disembarked at first place of landing",
            "flatlabel": "voyage slaves numbers : Number of females (age unspecified) (FEMALE3) disembarked at first place of landing"
        },
        "num_men_embark_second_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of men (MEN4) embarked at second port of purchase",
            "flatlabel": "voyage slaves numbers : Number of men (MEN4) embarked at second port of purchase"
        },
        "num_women_embark_second_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of women (WOMEN4) embarked at second port of purchase",
            "flatlabel": "voyage slaves numbers : Number of women (WOMEN4) embarked at second port of purchase"
        },
        "num_boy_embark_second_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of boys (BOY4) embarked at second port of purchase",
            "flatlabel": "voyage slaves numbers : Number of boys (BOY4) embarked at second port of purchase"
        },
        "num_girl_embark_second_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of girls (GIRL4) embarked at second port of purchase",
            "flatlabel": "voyage slaves numbers : Number of girls (GIRL4) embarked at second port of purchase"
        },
        "num_adult_embark_second_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of adults (gender unspecified) (ADULT4) embarked at second port of purchase",
            "flatlabel": "voyage slaves numbers : Number of adults (gender unspecified) (ADULT4) embarked at second port of purchase"
        },
        "num_child_embark_second_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of children (gender unspecified) (CHILD4) embarked at second port of purchase",
            "flatlabel": "voyage slaves numbers : Number of children (gender unspecified) (CHILD4) embarked at second port of purchase"
        },
        "num_infant_embark_second_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of infants (INFANT4) embarked at second port of purchase",
            "flatlabel": "voyage slaves numbers : Number of infants (INFANT4) embarked at second port of purchase"
        },
        "num_males_embark_second_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of males (age unspecified) (MALE4) embarked at second port of purchase",
            "flatlabel": "voyage slaves numbers : Number of males (age unspecified) (MALE4) embarked at second port of purchase"
        },
        "num_females_embark_second_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of females (age unspecified) (FEMALE4) embarked at second port of purchase",
            "flatlabel": "voyage slaves numbers : Number of females (age unspecified) (FEMALE4) embarked at second port of purchase"
        },
        "num_men_embark_third_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of men (MEN5) embarked at third port of purchase",
            "flatlabel": "voyage slaves numbers : Number of men (MEN5) embarked at third port of purchase"
        },
        "num_women_embark_third_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of women (WOMEN5) embarked at third port of purchase",
            "flatlabel": "voyage slaves numbers : Number of women (WOMEN5) embarked at third port of purchase"
        },
        "num_boy_embark_third_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of boys (BOY5) embarked at third port of purchase",
            "flatlabel": "voyage slaves numbers : Number of boys (BOY5) embarked at third port of purchase"
        },
        "num_girl_embark_third_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of girls (GIRL5) embarked at third port of purchase",
            "flatlabel": "voyage slaves numbers : Number of girls (GIRL5) embarked at third port of purchase"
        },
        "num_adult_embark_third_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of adults (gender unspecified) (ADULT5) embarked at third port of purchase",
            "flatlabel": "voyage slaves numbers : Number of adults (gender unspecified) (ADULT5) embarked at third port of purchase"
        },
        "num_child_embark_third_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of children (gender unspecified) (CHILD5) embarked at third port of purchase",
            "flatlabel": "voyage slaves numbers : Number of children (gender unspecified) (CHILD5) embarked at third port of purchase"
        },
        "num_infant_embark_third_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of infants (INFANT5) embarked at third port of purchase",
            "flatlabel": "voyage slaves numbers : Number of infants (INFANT5) embarked at third port of purchase"
        },
        "num_males_embark_third_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of males (age unspecified) (MALE5) embarked at third port of purchase",
            "flatlabel": "voyage slaves numbers : Number of males (age unspecified) (MALE5) embarked at third port of purchase"
        },
        "num_females_embark_third_port_purchase": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of females (age unspecified) (FEMALE5) embarked at third port of purchase",
            "flatlabel": "voyage slaves numbers : Number of females (age unspecified) (FEMALE5) embarked at third port of purchase"
        },
        "num_men_disembark_second_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of men (MEN6) disembarked at second place of landing",
            "flatlabel": "voyage slaves numbers : Number of men (MEN6) disembarked at second place of landing"
        },
        "num_women_disembark_second_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of women (WOMEN6) disembarked at second place of landing",
            "flatlabel": "voyage slaves numbers : Number of women (WOMEN6) disembarked at second place of landing"
        },
        "num_boy_disembark_second_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of boys (BOY6) disembarked at second place of landing",
            "flatlabel": "voyage slaves numbers : Number of boys (BOY6) disembarked at second place of landing"
        },
        "num_girl_disembark_second_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of girls (GIRL6) disembarked at second place of landing",
            "flatlabel": "voyage slaves numbers : Number of girls (GIRL6) disembarked at second place of landing"
        },
        "num_adult_disembark_second_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of adults (gender unspecified) (ADULT6) disembarked at second place of landing",
            "flatlabel": "voyage slaves numbers : Number of adults (gender unspecified) (ADULT6) disembarked at second place of landing"
        },
        "num_child_disembark_second_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of children (gender unspecified) (CHILD6) disembarked at second place of landing",
            "flatlabel": "voyage slaves numbers : Number of children (gender unspecified) (CHILD6) disembarked at second place of landing"
        },
        "num_infant_disembark_second_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of infants (INFANT6) disembarked at second place of landing",
            "flatlabel": "voyage slaves numbers : Number of infants (INFANT6) disembarked at second place of landing"
        },
        "num_males_disembark_second_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of males (age unspecified) (MALE6) disembarked at second place of landing",
            "flatlabel": "voyage slaves numbers : Number of males (age unspecified) (MALE6) disembarked at second place of landing"
        },
        "num_females_disembark_second_landing": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of females (age unspecified) (FEMALE6) disembarked at second place of landing",
            "flatlabel": "voyage slaves numbers : Number of females (age unspecified) (FEMALE6) disembarked at second place of landing"
        },
        "imp_num_adult_embarked": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of adults embarked (ADLT1IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of adults embarked (ADLT1IMP)"
        },
        "imp_num_children_embarked": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of adults embarked (CHIL1IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of adults embarked (CHIL1IMP)"
        },
        "imp_num_male_embarked": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of males embarked (MALE1IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of males embarked (MALE1IMP)"
        },
        "imp_num_female_embarked": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of females embarked (FEML1IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of females embarked (FEML1IMP)"
        },
        "total_slaves_embarked_age_identified": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves embarked with age identified (SLAVEMA1)",
            "flatlabel": "voyage slaves numbers : Total slaves embarked with age identified (SLAVEMA1)"
        },
        "total_slaves_embarked_gender_identified": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves embarked with gender identified (SLAVEMX1)",
            "flatlabel": "voyage slaves numbers : Total slaves embarked with gender identified (SLAVEMX1)"
        },
        "imp_adult_death_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of adults who died on Middle Passage (ADLT2IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of adults who died on Middle Passage (ADLT2IMP)"
        },
        "imp_child_death_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of children who died on Middle Passage (CHIL2IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of children who died on Middle Passage (CHIL2IMP)"
        },
        "imp_male_death_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of males who died on Middle Passage (MALE2IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of males who died on Middle Passage (MALE2IMP)"
        },
        "imp_female_death_middle_passage": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of females who died on Middle Passage (FEML2IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of females who died on Middle Passage (FEML2IMP)"
        },
        "imp_num_adult_landed": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of adults landed (ADLT3IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of adults landed (ADLT3IMP)"
        },
        "imp_num_child_landed": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of children landed (CHIL3IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of children landed (CHIL3IMP)"
        },
        "imp_num_male_landed": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of males landed (MALE3IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of males landed (MALE3IMP)"
        },
        "imp_num_female_landed": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of females landed (FEML3IMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of females landed (FEML3IMP)"
        },
        "total_slaves_landed_age_identified": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves identified by age among landed slaves (SLAVEMA3)",
            "flatlabel": "voyage slaves numbers : Total slaves identified by age among landed slaves (SLAVEMA3)"
        },
        "total_slaves_landed_gender_identified": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves identified by gender among landed slaves (SLAVEMX3)",
            "flatlabel": "voyage slaves numbers : Total slaves identified by gender among landed slaves (SLAVEMX3)"
        },
        "total_slaves_dept_or_arr_age_identified": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves identified by age at departure or arrival (SLAVEMA7)",
            "flatlabel": "voyage slaves numbers : Total slaves identified by age at departure or arrival (SLAVEMA7)"
        },
        "total_slaves_dept_or_arr_gender_identified": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves identified by gender at departure or arrival(SLAVEMX7)",
            "flatlabel": "voyage slaves numbers : Total slaves identified by gender at departure or arrival(SLAVEMX7)"
        },
        "imp_slaves_embarked_for_mortality": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Imputed number of slaves embarked for mortality calculation (TSLMTIMP)",
            "flatlabel": "voyage slaves numbers : Imputed number of slaves embarked for mortality calculation (TSLMTIMP)"
        },
        "imp_num_men_total": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of men (MEN7)",
            "flatlabel": "voyage slaves numbers : Number of men (MEN7)"
        },
        "imp_num_women_total": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of women (WOMEN7) ",
            "flatlabel": "voyage slaves numbers : Number of women (WOMEN7) "
        },
        "imp_num_boy_total": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of boys (BOY7)",
            "flatlabel": "voyage slaves numbers : Number of boys (BOY7)"
        },
        "imp_num_girl_total": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of girls (GIRL7)",
            "flatlabel": "voyage slaves numbers : Number of girls (GIRL7)"
        },
        "imp_num_adult_total": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of adults (gender unspecified) (ADULT7)",
            "flatlabel": "voyage slaves numbers : Number of adults (gender unspecified) (ADULT7)"
        },
        "imp_num_child_total": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of children (gender unspecified) (CHILD7)",
            "flatlabel": "voyage slaves numbers : Number of children (gender unspecified) (CHILD7)"
        },
        "imp_num_males_total": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of males (age unspecified) (MALE7)",
            "flatlabel": "voyage slaves numbers : Number of males (age unspecified) (MALE7)"
        },
        "imp_num_females_total": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Number of females (age unspecified) (FEMALE7) ",
            "flatlabel": "voyage slaves numbers : Number of females (age unspecified) (FEMALE7) "
        },
        "total_slaves_embarked_age_gender_identified": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves embarked wi th age and gender identified (SLAVMAX1)",
            "flatlabel": "voyage slaves numbers : Total slaves embarked wi th age and gender identified (SLAVMAX1)"
        },
        "total_slaves_by_age_gender_identified_among_landed": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves identified by age and gender among landed (SLAVMAX3)",
            "flatlabel": "voyage slaves numbers : Total slaves identified by age and gender among landed (SLAVMAX3)"
        },
        "total_slaves_by_age_gender_identified_departure_or_arrival": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "Total slaves identified by age and gender at departure or arrival (SLAVMAX7)",
            "flatlabel": "voyage slaves numbers : Total slaves identified by age and gender at departure or arrival (SLAVMAX7)"
        },
        "percentage_boys_among_embarked_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage of boys among embarked slaves (BOYRAT1)",
            "flatlabel": "voyage slaves numbers : Percentage of boys among embarked slaves (BOYRAT1)"
        },
        "child_ratio_among_embarked_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Child ratio among embarked slaves (CHILRAT1)",
            "flatlabel": "voyage slaves numbers : Child ratio among embarked slaves (CHILRAT1)"
        },
        "percentage_girls_among_embarked_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage of girls among embarked slaves (GIRLRAT1)",
            "flatlabel": "voyage slaves numbers : Percentage of girls among embarked slaves (GIRLRAT1)"
        },
        "male_ratio_among_embarked_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Male ratio among embarked slaves (MALRAT1)",
            "flatlabel": "voyage slaves numbers : Male ratio among embarked slaves (MALRAT1)"
        },
        "percentage_men_among_embarked_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage of men among embarked slaves (MENRAT1)",
            "flatlabel": "voyage slaves numbers : Percentage of men among embarked slaves (MENRAT1)"
        },
        "percentage_women_among_embarked_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage of women among embarked slaves (WOMRAT1)",
            "flatlabel": "voyage slaves numbers : Percentage of women among embarked slaves (WOMRAT1)"
        },
        "percentage_boys_among_landed_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage of boys among landed slaves (BOYRAT3)",
            "flatlabel": "voyage slaves numbers : Percentage of boys among landed slaves (BOYRAT3)"
        },
        "child_ratio_among_landed_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Child ratio among landed slaves (CHILRAT3)",
            "flatlabel": "voyage slaves numbers : Child ratio among landed slaves (CHILRAT3)"
        },
        "percentage_girls_among_landed_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage of girls among landed slaves (GIRLRAT3)",
            "flatlabel": "voyage slaves numbers : Percentage of girls among landed slaves (GIRLRAT3)"
        },
        "male_ratio_among_landed_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Male ratio among landed slaves (MALRAT3)",
            "flatlabel": "voyage slaves numbers : Male ratio among landed slaves (MALRAT3)"
        },
        "percentage_men_among_landed_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage of men among landed slaves (MENRAT3)",
            "flatlabel": "voyage slaves numbers : Percentage of men among landed slaves (MENRAT3)"
        },
        "percentage_women_among_landed_slaves": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage of women among landed slaves (WOMRAT3)",
            "flatlabel": "voyage slaves numbers : Percentage of women among landed slaves (WOMRAT3)"
        },
        "percentage_men": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage men on voyage (MENRAT7)",
            "flatlabel": "voyage slaves numbers : Percentage men on voyage (MENRAT7)"
        },
        "percentage_women": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage women on voyage (WOMRAT7)",
            "flatlabel": "voyage slaves numbers : Percentage women on voyage (WOMRAT7)"
        },
        "percentage_boy": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage boy on voyage (BOYRAT7)",
            "flatlabel": "voyage slaves numbers : Percentage boy on voyage (BOYRAT7)"
        },
        "percentage_girl": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage girl on voyage (GIRLRAT7)",
            "flatlabel": "voyage slaves numbers : Percentage girl on voyage (GIRLRAT7)"
        },
        "percentage_male": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage male on voyage (MALRAT7)",
            "flatlabel": "voyage slaves numbers : Percentage male on voyage (MALRAT7)"
        },
        "percentage_child": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage children on voyage (CHILRAT7)",
            "flatlabel": "voyage slaves numbers : Percentage children on voyage (CHILRAT7)"
        },
        "percentage_adult": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage adult on voyage",
            "flatlabel": "voyage slaves numbers : Percentage adult on voyage"
        },
        "percentage_female": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Percentage female on voyage",
            "flatlabel": "voyage slaves numbers : Percentage female on voyage"
        },
        "imp_mortality_ratio": {
            "type": "<class 'rest_framework.fields.FloatField'>",
            "label": "Imputed mortality ratio (VYMRTRAT)",
            "flatlabel": "voyage slaves numbers : Imputed mortality ratio (VYMRTRAT)"
        },
        "voyage": {
            "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
            "label": "Voyage",
            "flatlabel": "voyage slaves numbers : Voyage"
        }
    },
    "voyage_outcome": {
        "type": "table",
        "label": "voyage outcome",
        "flatlabel": "voyage outcome",
        "id": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "ID",
            "flatlabel": "voyage outcome : ID"
        },
        "outcome_owner": {
            "type": "table",
            "label": "Owner Outcome",
            "flatlabel": "voyage outcome : Owner Outcome",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "voyage outcome : Owner Outcome : ID"
            },
            "name": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Outcome label",
                "flatlabel": "voyage outcome : Owner Outcome : Outcome label"
            },
            "value": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "Code of outcome",
                "flatlabel": "voyage outcome : Owner Outcome : Code of outcome"
            }
        },
        "outcome_slaves": {
            "type": "table",
            "label": "Slaves Outcome",
            "flatlabel": "voyage outcome : Slaves Outcome",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "voyage outcome : Slaves Outcome : ID"
            },
            "name": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Outcome label",
                "flatlabel": "voyage outcome : Slaves Outcome : Outcome label"
            },
            "value": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "Code of outcome",
                "flatlabel": "voyage outcome : Slaves Outcome : Code of outcome"
            }
        },
        "particular_outcome": {
            "type": "table",
            "label": "Particular Outcome",
            "flatlabel": "voyage outcome : Particular Outcome",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "voyage outcome : Particular Outcome : ID"
            },
            "name": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Outcome label",
                "flatlabel": "voyage outcome : Particular Outcome : Outcome label"
            },
            "value": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "Code of outcome",
                "flatlabel": "voyage outcome : Particular Outcome : Code of outcome"
            }
        },
        "resistance": {
            "type": "table",
            "label": "Resistance",
            "flatlabel": "voyage outcome : Resistance",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "voyage outcome : Resistance : ID"
            },
            "name": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Resistance label",
                "flatlabel": "voyage outcome : Resistance : Resistance label"
            },
            "value": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "Code of resistance",
                "flatlabel": "voyage outcome : Resistance : Code of resistance"
            }
        },
        "vessel_captured_outcome": {
            "type": "table",
            "label": "Vessel Captured Outcome",
            "flatlabel": "voyage outcome : Vessel Captured Outcome",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "voyage outcome : Vessel Captured Outcome : ID"
            },
            "name": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Outcome label",
                "flatlabel": "voyage outcome : Vessel Captured Outcome : Outcome label"
            },
            "value": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "Code of outcome",
                "flatlabel": "voyage outcome : Vessel Captured Outcome : Code of outcome"
            }
        },
        "voyage": {
            "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
            "label": "Voyage",
            "flatlabel": "voyage outcome : Voyage"
        }
    },
    "voyage_sourceconnection": {
        "type": "table",
        "label": "voyage sources connection",
        "flatlabel": "voyage sources connection",
        "id": {
            "type": "<class 'rest_framework.fields.IntegerField'>",
            "label": "ID",
            "flatlabel": "voyage sources connection : ID"
        },
        "source": {
            "type": "table",
            "label": "Source",
            "flatlabel": "voyage sources connection : Source",
            "id": {
                "type": "<class 'rest_framework.fields.IntegerField'>",
                "label": "ID",
                "flatlabel": "voyage sources connection : Source : ID"
            },
            "short_ref": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Short reference",
                "flatlabel": "voyage sources connection : Source : Short reference"
            },
            "full_ref": {
                "type": "<class 'rest_framework.fields.CharField'>",
                "label": "Full reference",
                "flatlabel": "voyage sources connection : Source : Full reference"
            },
            "source_type": {
                "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
                "label": "Source Type",
                "flatlabel": "voyage sources connection : Source : Source Type"
            }
        },
        "text_ref": {
            "type": "<class 'rest_framework.fields.CharField'>",
            "label": "Text reference(citation)",
            "flatlabel": "voyage sources connection : Text reference(citation)"
        },
        "voyage": {
            "type": "<class 'rest_framework.relations.PrimaryKeyRelatedField'>",
            "label": "Voyage",
            "flatlabel": "voyage sources connection : Voyage"
        }
    },
    "voyage_id": {
        "type": "<class 'rest_framework.fields.IntegerField'>",
        "label": "Voyage ID",
        "flatlabel": "Voyage ID"
    },
    "voyage_in_cd_rom": {
        "type": "<class 'rest_framework.fields.BooleanField'>",
        "label": "Voyage in 1999 CD-ROM?",
        "flatlabel": "Voyage in 1999 CD-ROM?"
    },
    "last_update": {
        "type": "<class 'rest_framework.fields.DateTimeField'>",
        "label": "Last update",
        "flatlabel": "Last update"
    },
    "dataset": {
        "type": "<class 'rest_framework.fields.IntegerField'>",
        "label": "Dataset",
        "flatlabel": "Dataset"
    }
}