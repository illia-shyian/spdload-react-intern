import { gql } from "@apollo/client";

export const GetAllTours = gql`
    query GetAllTours {
        histories {
            flight {
                links {
                    flickr_images
                }
                mission_name
            }
            id
            title
        }
    }
`;
