package at.htl.control;

import at.htl.entity.Measurement;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

@Transactional
@ApplicationScoped
public class MeasurementRepository implements PanacheRepository<Measurement> {
}
