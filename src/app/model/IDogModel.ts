export interface IDogModel {
  weight: { imperial: number, metric: number }
  height: { imperial: number, metric: number }
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  origin: string
  reference_image_id: string
  image: { id: string, width: number, height: number, url: string }


}
