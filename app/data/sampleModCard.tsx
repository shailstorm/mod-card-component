import { ModCardProps } from "../components/ModCard"

export const sampleCard: ModCardProps = {
  media: [
    {src: "artillery-gun.webp", type: 'image'}, 
    {src: "artillery-vid.mp4", type: 'video'},
    {src: "crossbow.mp4", type: 'video'}
  ],
  tags: [
    {name: "MC Java 1.21.5", feature: true},
    {name: "Weapon", feature: false},
    {name: "v1", feature: true}, 
    {name: "Ranged", feature: false},
  ],
  title: "Artillery Gun",
  user: { pfp: "pfp.png", username: "StaticShock"},
  description: "Add an artillery gun that fires on right click or towards a thrown smoke grenade."
}